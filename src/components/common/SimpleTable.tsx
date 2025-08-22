import styled from 'styled-components'

export function SimpleTable<T extends Record<string, unknown>>({ columns, data }: { columns: { key: keyof T; label: string }[]; data: T[] }) {
  return (
    <Table>
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={String(c.key)}>{c.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {columns.map((c) => (
              <td key={String(c.key)}>{String(row[c.key] ?? '')}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td { padding: 8px; border-bottom: 1px solid ${({ theme }) => theme.color.border}; text-align: left; }
  thead th { color: ${({ theme }) => theme.color.mutedText}; font-weight: 600; }
`


