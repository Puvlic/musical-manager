export enum musicianActionType {
    FETCH_MUSICIAN = 'FETCH-MUSICIAN',
    FETCH_MUSICIAN_LOADING = 'FETCH-MUSICIAN-LOADING',
    FETCH_MUSICIAN_ERROR = 'FETCH-MUSICIAN-ERROR'
}

interface fetchMusician {
    type: musicianActionType.FETCH_MUSICIAN
    payload: musician[]
}

interface fetchMusicianLoading {
    type: musicianActionType.FETCH_MUSICIAN_LOADING,
}

interface fetchMusicianError {
    type: musicianActionType.FETCH_MUSICIAN_ERROR,
    payload: string
}

interface musician {
    id: number,
    name: string,
    secondname: string,
    lastname: string,
    age: number,
    role: string,
}

export interface musiciansState {
    musicians: musician[],
    loading: boolean,
    error: null | string
}

export type MusiciansType = fetchMusician | fetchMusicianLoading | fetchMusicianError