
type Props = {
    params: {
        keyword: string
    }
}
const page = ({params: {keyword}}: Props) => {
    
  return (
    <div>search page {keyword}</div>
  )
}

export default page