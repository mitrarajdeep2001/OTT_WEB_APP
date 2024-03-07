type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};
const page = ({ params: { id }, searchParams: { genre } }: Props) => {
  return (
    <div>
      page: {id} {genre}
    </div>
  );
};

export default page;
