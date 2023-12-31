export type DnsRequestType = {
  counting: {
    name: string
    duration: number
    count: number
  }[]
  qTypeCounting: {
    qType: string
    duration: number
    count: number
  }[]
  dnsTypeCounting: {
    dnsType: string
    duration: number
    count: number
  }[]
}

export type RuleMatchType = {
  counting: {
    duration: number
    payload: string
    proxy: string
    count: number
  }[]
  portCounting: {
    port: number
    count: number
  }[]
  processCounting: {
    path: string
    count: number
  }[]
  clientCounting: {
    ip: string
    count: number
  }[]
}

export type ProxyDialType = {
  proxyCounting: {
    proxy: string
    duration: number
    count: number
  }[]
  hostCounting: {
    host: string
    duration: number
    count: number
  }[]
}

export type TrafficType = {
  up: number
  down: number
  history: {
    up: number
    down: number
    createTime: number
  }[]
}

export type ProcessDetailType = {
  sourceIP: string
  sourcePort: number
  destinationIP: string
  destinationPort: number
  host: string
  dnsMode: string
  createTime: number
}[]

export type PageType<T> = {
  total: number
  page: number
  pageSize: number
  data: T[]
}
