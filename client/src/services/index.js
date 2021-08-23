export const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_OVERWATCH_BASE}/characters`

export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_OVERWATCH_KEY}`
  }
}