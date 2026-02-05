export interface VideoData {
    downloadUrl: string;
    cover: string;
    text: string;
}

export interface ApiResponse {
    status: 'success' | 'error';
    data?: VideoData;
    error?: string;
}