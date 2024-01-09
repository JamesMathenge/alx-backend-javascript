import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    // Call uploadPhoto and createUser asynchronously
    const photoPromise = uploadPhoto();
    const userPromise = createUser();

    // Wait for both promises to resolve
    const [photoResponse, userResponse] = await Promise.all([photoPromise, userPromise]);

    // Return the combined result
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // If any of the promises reject, return an empty object
    console.error('Error:', error.message);
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;
