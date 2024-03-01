type Props = {
    params: {
        id: string
    },
    searchParams: {
        genre: string
    }
}
const page = ({params: {id}, searchParams: {genre}}: Props) => {
    console.log(id, genre);
    
  return (
    <div>page: {id} {genre}</div>
  )
}

export default page