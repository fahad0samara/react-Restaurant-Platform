import React, { useState } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Edit2, Trash2, UserPlus } from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  lastActive: string;
  status: 'active' | 'inactive';
}

const initialUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'admin',
    lastActive: '2 hours ago',
    status: 'active'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'user',
    lastActive: '1 day ago',
    status: 'active'
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    role: 'user',
    lastActive: '3 days ago',
    status: 'inactive'
  }
];

const columnHelper = createColumnHelper<User>();

export default function UserManagement() {
  const [users] = useState<User[]>(initialUsers);

  const columns = [
    columnHelper.accessor('name', {
      header: 'Name',
      cell: (info) => (
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-sm font-medium text-gray-600">
              {info.getValue().charAt(0)}
            </span>
          </div>
          <span className="ml-3 font-medium">{info.getValue()}</span>
        </div>
      ),
    }),
    columnHelper.accessor('email', {
      header: 'Email',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('role', {
      header: 'Role',
      cell: (info) => (
        <span className={`px-2 py-1 text-xs rounded-full ${
          info.getValue() === 'admin'
            ? 'bg-purple-100 text-purple-800'
            : 'bg-blue-100 text-blue-800'
        }`}>
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      cell: (info) => (
        <span className={`px-2 py-1 text-xs rounded-full ${
          info.getValue() === 'active'
            ? 'bg-green-100 text-green-800'
            : 'bg-gray-100 text-gray-800'
        }`}>
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.accessor('lastActive', {
      header: 'Last Active',
      cell: (info) => (
        <span className="text-gray-500">{info.getValue()}</span>
      ),
    }),
    columnHelper.display({
      id: 'actions',
      cell: () => (
        <div className="flex justify-end gap-2">
          <button className="p-1 text-blue-600 hover:text-blue-800">
            <Edit2 className="h-4 w-4" />
          </button>
          <button className="p-1 text-red-600 hover:text-red-800">
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      ),
    }),
  ];

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">User Management</h1>
        <button className="btn btn-primary flex items-center gap-2">
          <UserPlus className="h-5 w-5" />
          Add User
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="min-w-full divide-y divide-gray-200">
          <div className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <div key={headerGroup.id} className="flex divide-x divide-gray-200">
                {headerGroup.headers.map((header) => (
                  <div
                    key={header.id}
                    className="px-6 py-3 text-left flex-1"
                  >
                    {header.isPlaceholder ? null : (
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <div key={row.id} className="flex divide-x divide-gray-200 hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <div key={cell.id} className="px-6 py-4 flex-1">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}