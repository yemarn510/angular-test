import { environment } from "../../environments/environment"

const API_URL = environment.API_ENDPOINT + '/api'

export const APIS = {
  v1: {
    artworks: 'artworks',
  }
}