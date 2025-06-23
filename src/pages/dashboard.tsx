
import { GetServerSideProps } from "next";
import ArtistTable from "@/app/components/ArtistTable"; 
import { Submission } from "@/types";
import Header from "@/app/components/Header";

type Props = {
  submissions: Submission[];
};

export default function Dashboard({ submissions }: Props) {
  return (
    <>
    <Header />
    <main className="max-w-4xl mx-auto p-6 space-y-4 dark:bg-zinc-900">
      <h1 className="text-2xl font-bold">Artist Submissions</h1>
      {submissions.length > 0 ? (
        <ArtistTable submissions={submissions} />
      ) : (
        <p className="text-gray-500">No submissions yet.</p>
      )}
    </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const submissions = [
    {
      name: "Aria Blaze",
      category: "Singer",
      location: "Mumbai",
      feeRange: "₹15,000 - ₹25,000",
    },
  ];

  return {
    props: {
      submissions,
    },
  };
};
