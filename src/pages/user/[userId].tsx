import { useGetUserDetails } from "@/lib/hooks/useGetUserDetails";
import { GetServerSideProps } from "next";

const UserDetails = ({ userId }: { userId: number }) => {
  const user = useGetUserDetails(userId);

  return <>{user?.name}</>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { userId } = context.query;

  return {
    props: {
      userId,
    },
  };
};

export default UserDetails;
