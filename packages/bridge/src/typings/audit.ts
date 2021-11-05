import { ColumnGroupType, ColumnType as AntdColumnType } from 'antd/lib/table'

// type EventType = 'Inquiry' | 'View' | string;

interface ColumnType<T = Record<string, string>> extends AntdColumnType<T> {
  type?: 'img' | 'text'
}

interface IFundamental {
  actionCode: string
  branch?: string
  systemModule?: string
  resource?: string
  failReason?: string
  permissionCode: string
  operator?: string
  snapshot?: {
    before: any
    after: any
  }
}

interface ICommonEvent {
  eventType: 'Inquiry'
  fundamental?: IFundamental
  eventInfo: {
    columns: ColumnType[]
    dataSource: object[]
    searchParam: { field: string; value: string | number }[]
    list?: object[]
    serviceTicketNumber?: string
  }
}

interface ISpecificEvent {
  eventType: 'View' | string
  fundamental?: IFundamental
  eventInfo?: {
    eventType: 'ViewID' | 'HideID' | string
    specialDetail?: any
  }
}

export type AuditData = ICommonEvent | ISpecificEvent

// type IColumnsType<T> = ColumnsType<T>;

interface AuditType<RecordType = object> {
  type?: 'text' | 'img'
  titleText?: string
  contentText?: ((value: any, record: RecordType, index: number) => string | number) | string | number
}

export type IAuditColumnsType<RecordType = unknown> = (
  | (ColumnGroupType<RecordType> & AuditType<RecordType>)
  | (ColumnType<RecordType> & AuditType<RecordType>)
)[]
