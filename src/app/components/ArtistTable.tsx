import { Submission } from "@/types";
type Props = {
  submissions: Submission[];
};

export default function ArtistTable({ submissions }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border border-gray-200">
        <thead className="bg-gray-100 text-left dark:bg-gray-800">
          <tr>
            <th className="p-3 border-b">Name</th>
            <th className="p-3 border-b">Category</th>
            <th className="p-3 border-b">City</th>
            <th className="p-3 border-b">Fee</th>
            <th className="p-3 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((artist, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-3 border-b">{artist.name}</td>
              <td className="p-3 border-b">{artist.category}</td>
              <td className="p-3 border-b">{artist.location}</td>
              <td className="p-3 border-b">{artist.feeRange}</td>
              <td className="p-3 border-b">
                <div className="flex space-x-5">
                <button className="text-blue-600 hover:underline text-xs">
                  View
                </button>
                <button className="text-red-600 hover:underline text-xs">
                  Delete
                </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}