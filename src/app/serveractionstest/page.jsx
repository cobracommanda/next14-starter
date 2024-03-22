import { sayHello } from '@/lib/actions'


const ServerActionPageTest = () => {
  return (
    <div>
        <form action={sayHello}>
            <button>Click Me</button>
        </form>
    </div>
  )
}

export default ServerActionPageTest