import { put } from '@vercel/blob';

export async function uploadImage(file: File, folder: string = 'gallery') {
  try {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('folder', folder)

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Error subiendo imagen')
    }

    const data = await response.json()
    return data.url
  } catch (error) {
    console.error('Error subiendo imagen:', error)
    throw error
  }
}

export function getBlobUrl(filename: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BLOB_BASE_URL || '';
  return `${baseUrl}/${filename}`;
}

export async function deleteImage(url: string) {
  try {
    const response = await fetch(`/api/upload?url=${encodeURIComponent(url)}`, {
      method: 'DELETE',
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Error eliminando imagen')
    }

    return true
  } catch (error) {
    console.error('Error eliminando imagen:', error)
    throw error
  }
}
