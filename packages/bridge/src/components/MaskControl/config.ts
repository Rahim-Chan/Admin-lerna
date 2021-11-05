import { maskName, maskEmail, maskNumber } from '../../utils/dataMask';

export const maskCodeMap = {
  AccountNumber: 'M001',
  AccountName: 'M002',
  CustomerNameAlias: 'M003',
  AccountNumberAIO: 'M004',
  BeneficiaryOwner: 'M005',
  FullName: 'M006',
  PayeeAccount: 'M007',
  Email: 'M008',
  ChinesepinyinAlias: 'M009',
  ChinesePinyinName: 'M010',
  IDName: 'M011',
  IDNumber: 'M012',
  MarriedName: 'M013',
  MobileNumber: 'M014',
  USSSN: 'M015',
  TaxpayerIdentificationNumber: 'M016',
  CountryAccountNumber: 'M017',
  CountryAccountName: 'M018',
};

export type TMaskCode = keyof typeof maskCodeMap;
export const maskConfig = {
  M001: maskNumber,
  M002: maskName,
  M003: maskName,
  M004: maskNumber,
  M005: maskName,
  M006: maskName,
  M007: maskNumber,
  M008: maskEmail,
  M009: maskName,
  M010: maskName,
  M011: maskName,
  M012: maskNumber,
  M013: maskName,
  M014: maskNumber,
  M015: maskNumber,
  M016: maskNumber,
  M017: maskNumber,
  M018: maskName,
};
