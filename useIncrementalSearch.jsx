import { useState, useEffect, useRef } from "react";

export default function useIncrementalSearch(data, searchQuery) {
    const [filtered, setFiltered] = useState(data);
    const prevQueryRef = useRef("");

    useEffect(() => {
        const currentQuery = searchQuery.toLowerCase().trim();
        const prevQuery = prevQueryRef.current.toLowerCase().trim();

        if (currentQuery.startsWith(prevQuery)) {
            setFiltered(prev =>
                prev.filter(item =>
                    item.name?.toLowerCase().includes(currentQuery)
                )
            );
        } else {
            setFiltered(
                data.filter(item =>
                    item.name?.toLowerCase().includes(currentQuery)
                )
            );
        }

        prevQueryRef.current = searchQuery;
    }, [searchQuery, data]);

    return Array(filtered);
}
