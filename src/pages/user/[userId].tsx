import { GetServerSideProps } from "next";

const UserDetails = ({ userId }: { userId: number }) => {
  return <>users</>;
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
