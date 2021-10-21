import {
  deleteLocation,
  getLocation,
  postLocation,
  putLocation,
} from '../remote/location-api/location.api'
import Location from '../models/location'
import { add, remove, update } from '../slices/location.slice'
import { store } from '../store'

const getLocationService = async (id: number) => {
  let toReturn: any = -1
  try {
    toReturn = await getLocation(id)
    store.dispatch(add(toReturn))
  } catch (error) {
    console.log(error)
  }
  if (toReturn !== -1) {
    return toReturn
  } else {
    return 'There was an error'
  }
}

const insertLocationService = async (loc: Location) => {
  let toReturn: any = -1
  try {
    toReturn = await postLocation(loc)
    store.dispatch(add(toReturn))
  } catch (error) {
    console.log(error)
  }
  if (toReturn !== -1) {
    return toReturn
  } else {
    return 'There was an error'
  }
}

const updateLocationService = async (loc: Location) => {
  let toReturn: any = -1
  try {
    toReturn = await putLocation('' + loc.id, loc)
    store.dispatch(update(toReturn))
  } catch (error) {
    console.log(error)
  }
  if (toReturn !== -1) {
    return toReturn
  } else {
    return 'There was an error'
  }
}

const deleteLocationService = async (addressId: number | string) => {
  let toReturn: any = -1
  try {
    toReturn = await deleteLocation(addressId)
    store.dispatch(remove(toReturn))
  } catch (error) {
    console.log(error)
  }
  if (toReturn !== -1) {
    return toReturn
  } else {
    return 'There was an error'
  }
}

export {
  getLocationService,
  insertLocationService,
  updateLocationService,
  deleteLocationService,
}
