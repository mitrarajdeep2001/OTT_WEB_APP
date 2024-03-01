type Props = {
    params: {
        keyword: string
    }
}
const page = ({params: {keyword}}: Props) => {
    const decodedKeyword = decodeURI(keyword)
  return (
    <div>search page: {decodedKeyword}</div>
  )
}

export default page