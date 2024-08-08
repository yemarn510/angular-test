import { Observable } from "rxjs";


export interface Environment {
  API_ENDPOINT: string;
}

export type $PaginatedResponse<T> = Observable<PaginatedResponse<T>>

export interface Pagination {
	total: number;
	limit: number;
	offset: number;
	total_pages: number;
	current_page: number;
	next_url: string;
}

export interface Info {
	license_text: string;
	license_links: string[];
	version: string;
}

export interface Config {
	iiif_url: string;
	website_url: string;
}

export interface PaginatedResponse<T> {
	pagination: Pagination;
	data: T[];
	info: Info;
	config: Config;
}