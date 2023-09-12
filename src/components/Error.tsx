interface ErrorProps {
  msg: string
}
export default function Error({ msg }: ErrorProps) {
  return (
    <div className="text-red-400">
      {msg}
    </div>
  )
}