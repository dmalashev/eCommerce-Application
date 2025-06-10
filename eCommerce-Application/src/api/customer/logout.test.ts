import { describe, it, expect } from 'vitest';
import { StorageTokenKeys } from '../../types/enums';


afterEach(() => localStorage.clear())

describe('./logout.ts', () => {
  const token =  {
    refresh_token: 'string',
    access_token: 'str',
    token_expiration: 3,

  }


  it('should delete  access_token', () => {

    localStorage.setItem(StorageTokenKeys.ACCESS_TOKEN, token.access_token)

    localStorage.removeItem(StorageTokenKeys.ACCESS_TOKEN)

    expect(localStorage.getItem(StorageTokenKeys.ACCESS_TOKEN)).toBeNull()

  })
  it('should delete  refresh_token', () => {

    localStorage.setItem(StorageTokenKeys.REFRESH_TOKEN, token.refresh_token)

    localStorage.removeItem(StorageTokenKeys.REFRESH_TOKEN)

    expect(localStorage.getItem(StorageTokenKeys.REFRESH_TOKEN)).toBeNull()

  })
  it('should delete  token_expiration', () => {

    localStorage.setItem(StorageTokenKeys.TOKEN_EXPIRATION, String(token.token_expiration))

    localStorage.removeItem(StorageTokenKeys.TOKEN_EXPIRATION)

    expect(localStorage.getItem(StorageTokenKeys.TOKEN_EXPIRATION)).toBeNull()

  })



})