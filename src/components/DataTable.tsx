import TableActions from './TableActions';
import { buttonVariants } from './ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import Link from 'next/link';

type Props = {
  data: Array<Record<string, unknown>>;
  type: string;
};

export default function DataTable({ data, type }: Props) {
  let columnNames: string[] = [];
  if (data.length !== 0) {
    columnNames = Object?.keys(data[0]);
  }
  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 w-full">
        <p className="text-slate-600 text-sm sm:text-base">
          No {type} available
        </p>
        <Link href={`/dashboard/${type}/create`} className={buttonVariants()}>
          Create new {type.slice(0, -1)}
        </Link>
      </div>
    );
  }
  return (
    <div className="overflow-auto w-full rounded-md shadow">
      <Table className="min-w-full rounded-md">
        <TableHeader>
          <TableRow>
            {columnNames.map((columnName: string, index: number) => (
              <TableHead
                className={`px-4 py-2 whitespace-nowrap  overflow-hidden bg-slate-800 text-slate-100 ${
                  index === 0 ? 'min-w-[70px]' : ''
                }`}
                key={index}
              >
                {columnName.toUpperCase()}
              </TableHead>
            ))}
            <TableHead className="text-center px-4 py-2 whitespace-nowrap overflow-hidden bg-slate-800 text-slate-100 min-w-[150px]">
              ACTIONS
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columnNames.map((columnName, colIndex) => (
                <TableCell
                  className={`px-4 py-2 whitespace-nowrap overflow-hidden ${
                    colIndex === 0
                      ? 'max-w-[100px] overflow-hidden text-xs italic'
                      : ''
                  }`}
                  key={colIndex}
                >
                  {row[columnName] && row[columnName] !== undefined
                    ? row[columnName].toString()
                    : ''}
                </TableCell>
              ))}
              <TableCell align="center">
                <TableActions
                  type={type.toLowerCase()}
                  id={row?.id as string}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
