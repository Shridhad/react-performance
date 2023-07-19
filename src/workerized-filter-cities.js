import makeFilterCitiesWorker from 'workerize!./filter-cities'

const {getItems} = makeFilterCitiesWorker()

export {getItems, makeFilterCitiesWorker}

/*
eslint
  import/no-webpack-loader-syntax: 0,
*/
