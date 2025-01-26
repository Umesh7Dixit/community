// import { Card, CardHeader, CardTitle, CardContent, Button } from '@/components/ui/card';

// const MembershipCommunity = () => {
//   return (
//     <Card className="w-full max-w-3xl">
//       <CardHeader>
//         <CardTitle>The Membership You Truly Need</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <h2 className="text-2xl font-bold mb-4">A Community That Stands by You</h2>
//         <p className="mb-6">
//           A community that's more than just connections—it's your reliable companion. Join us for support, growth, and opportunities. Access premium content, events, courses, and build lasting relationships!
//         </p>
//         <Button variant="primary" className="block mx-auto">
//           JOIN NOW
//         </Button>
//       </CardContent>
//     </Card>
//   );
// };

// export default MembershipCommunity;




const MembershipCommunity = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl w-full">
      <h2 className="text-2xl font-bold mb-4">The Membership You Truly Need</h2>
      <h3 className="text-xl font-bold text-red-500 mb-4">A Community That Stands by You</h3>
      <p className="mb-6">
        A community that's more than just connections—it's your reliable companion. Join us for support, growth, and opportunities. Access premium content, events, courses, and build lasting relationships!
      </p>
      <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded block mx-auto">
        JOIN NOW
      </button>
    </div>
  );
};

export default MembershipCommunity;