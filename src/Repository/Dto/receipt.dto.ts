interface ReceiptItemEnvelopeDto {
  ITEM: ReceiptItemDto,
}

interface ReceiptItemDto {
  ID: Number,
  DESC: String,
  QTY: Number,
  TAXCODE: Number,
  AMT: Number,
}

interface ReceiptTotalsDto {
  TOTALTAXEXCL: Number,
  TOTALTAXINCL: Number,
  DISCOUNT: Number,
}

interface ReceiptPaymentsDto {
  PMTTYPE: String,
  PMTAMOUNT: Number,
}

interface ReceiptVatTotalsDto {
  VATRATE: String,
  NETTAMOUNT: Number,
  TAXAMOUNT: Number,
}

interface ReceiptEnvelopeDto {
  DATE: String,
  TIME: String, 
  TIN: String,
  REGID: String,
  EFDSERIAL: String,
  CUSTID: Number,
  CUSTNAME: String,
  MOBILENUM: String,
  RCTNUM: 1,
  DC: Number,
  GC: Number,
  ZNUM: Number,
  RCTVNUM: String,
  ITEMS: ReceiptItemEnvelopeDto[],  
  TOTALS: ReceiptTotalsDto,
  PAYMENTS: ReceiptPaymentsDto, 
  VATTOTALS: ReceiptVatTotalsDto,
}

export interface ReceiptDto {
  RCT: ReceiptEnvelopeDto
}
