import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Button } from './ui/button';
import { Eye, MoreHorizontal, Pencil, Trash } from 'lucide-react';
import Link from 'next/link';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog';
import SubmitButton from './SubmitButton';
import { deleteQuestion } from '@/lib/actions/questions/actions';
import { deleteCategory } from '@/lib/actions/categories/actions';
import { redirect } from 'next/navigation';
import { getUserByClerkId, getUserById } from '@/lib/queries/users/queries';
import { deleteUser } from '@/lib/actions/users/actions';

type Props = {
  type: string;
  id: string;
};

export default function TableActions({ type, id }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="secondary">
          <MoreHorizontal className="size-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="center">
        <DropdownMenuItem asChild>
          <Link href={`/dashboard/${type}/${id}`}>
            <Eye className="size-4 mr-2" /> View
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`/dashboard/${type}/${id}/edit`}>
            <Pencil className="size-4 mr-2" /> Edit
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <AlertDialog>
            <AlertDialogTrigger className="w-full cursor-default hover:bg-rose-100 p-1 rounded">
              <div className="flex text-sm ml-2 w-full">
                <Trash className="size-4 mr-2" /> Delete
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  this {type.slice(0, -1)} and remove its data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction asChild>
                  <form
                    action={async () => {
                      'use server';
                      if (type === 'questions') {
                        deleteQuestion(id);
                      } else if (type === 'categories') {
                        deleteCategory(id);
                      } else if (type === 'users') {
                        deleteUser(id);
                      }
                      redirect(`/dashboard/${type}`);
                    }}
                  >
                    <SubmitButton text="Delete" />
                  </form>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
