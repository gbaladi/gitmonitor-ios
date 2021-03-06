import mirror from '../utils/mirror'

const initialState = {
  repos: [],
  loading: false
}

export const ReposConst = mirror([
  'REPO_SUCCESS',
  'REPO_LOADING',
  'REPO_TOGGLE',
  'REPO_ERROR'
])

export function Reducer(state = initialState, action) {
  switch (action.type) {
    case ReposConst.REPO_TOGGLE:
      let mappedRepos = _.map(state.repos, function(item){
        return (item.id === action.payload) ? {
          ...item,
          open: !item.open
        } : item
      })
      return {
        ...state,
        repos: mappedRepos
      }
    case ReposConst.REPO_SUCCESS:
      let mappedReposS = _.map(action.payload, function(item){
        return {
          ...item,
          open: false
        }
      })
      return {
        loading: false,
        repos: mappedReposS
      }
    case ReposConst.REPO_ERROR:
      return {
        loading: false,
        repos: state.repos
      }
    case ReposConst.REPO_LOADING:
      return {
        loading: true,
        repos: state.repos
      }
    default:
      return state
  }
}
