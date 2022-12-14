import { useAppDispatch } from './../app/hook'
import apiService from '../services/AxiosClient'
import { getData } from '../features/Home'

const taskUrl = 'task'

const Home = {
  getData: async () => apiService().get(taskUrl),
}

export default Home
