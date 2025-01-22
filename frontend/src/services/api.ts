const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

export async function getProjects(params?: { 
  search?: string;
  category?: string;
  language?: string;
  priceRange?: [number, number];
  sortBy?: string;
  page?: number;
  limit?: number;
}) {
  try {
    let url = `${API_URL}/api/projects?populate=*`;
    
    if (params?.search) {
      url += `&filters[Title][$containsi]=${params.search}`;
    }
    if (params?.category) {
      url += `&filters[Category][$eq]=${params.category}`;
    }
    if (params?.language) {
      url += `&filters[Language][$eq]=${params.language}`;
    }
    if (params?.priceRange) {
      url += `&filters[price][$gte]=${params.priceRange[0]}`;
      url += `&filters[price][$lte]=${params.priceRange[1]}`;
    }
    if (params?.sortBy) {
      switch (params.sortBy) {
        case 'newest':
          url += '&sort=createdAt:desc';
          break;
        case 'oldest':
          url += '&sort=createdAt:asc';
          break;
        case 'price-low':
          url += '&sort=price:asc';
          break;
        case 'price-high':
          url += '&sort=price:desc';
          break;
      }
    }

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
}

export async function getProfile() {
  try {
    const response = await fetch(`${API_URL}/api/profiles?populate=*`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch profile');
    }

    const result = await response.json();
    return result.data[0];
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
} 