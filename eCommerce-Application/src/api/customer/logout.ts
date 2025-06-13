import { StorageTokenKeys } from '../../types/enums';

export function logout(): void {
  localStorage.removeItem(StorageTokenKeys.ACCESS_TOKEN);
  localStorage.removeItem(StorageTokenKeys.REFRESH_TOKEN);
  localStorage.removeItem(StorageTokenKeys.TOKEN_EXPIRATION);
}
