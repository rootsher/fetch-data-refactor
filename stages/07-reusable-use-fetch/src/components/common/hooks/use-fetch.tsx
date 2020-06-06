import { useState, useEffect } from 'react';
import { Observable } from 'rxjs';

export function useFetch<T>(
    observable: Observable<T>,
    initialState: T
): {
    loading: boolean,
    error: Error | null,
    response: T
} {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    const [response, setResponse] = useState<T>(initialState);

    useEffect(() => {
        setLoading(true);

        observable.subscribe(
            response => setResponse(response),
            error => setError(error),
            () => setLoading(false)
        );
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return {
        loading,
        error,
        response,
    };
};
