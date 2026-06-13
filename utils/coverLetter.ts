export function parseCoverLetter(src: string): {
    data: Record<string, string>;
    body: string;
} {
    const normalized = src.replace(/\r\n/g, "\n");
    const match = normalized.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
    if (!match) return { data: {}, body: src };
    const data: Record<string, string> = {};
    for (const line of match[1].split("\n")) {
        const idx = line.indexOf(":");
        if (idx === -1) continue;
        data[line.slice(0, idx).trim()] = line
            .slice(idx + 1)
            .trim()
            .replace(/^["']|["']$/g, "");
    }
    return { data, body: match[2] };
}

export function coverLetterSlug(path: string): string {
    return path.split("/").pop()!.replace(/\.md$/, "");
}
