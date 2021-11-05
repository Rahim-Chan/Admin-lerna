/**
 * 判断是否有权限
 */

import UseStore from './useStore'

function usePermission(permissionName: string | string[]) {
  const {
    user: { permission },
  } = UseStore()
  if (!permissionName) {
    return true
  }
  if (!Array.isArray(permissionName)) {
    permissionName = [permissionName]
  }
  permissionName = permissionName.filter((name) => !!name)
  if (!permissionName.length) {
    return true
  }
  if (!permission || !permission.length) {
    return false
  }
  return permissionName.some((name) => permission.includes(name))
}

export default usePermission
