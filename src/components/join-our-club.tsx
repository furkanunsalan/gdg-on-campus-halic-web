import React from 'react';
import Link from 'next/link';

const JoinOurClub: React.FC = () => {
  return (
    <Link href="https://forms.gle/TjGF5EWfYWB9aho6A" className="fixed bottom-6 right-6 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
      Join Our Club!
    </Link>
  );
};

export default JoinOurClub;
