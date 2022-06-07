import { Injectable } from '@nestjs/common'
import { ReceiptDto } from 'src/Repository/Dto'
import * as fs from 'fs'
import * as dayjs from 'dayjs'

@Injectable()
export class ReceiptsService {
  async save(receiptDto: ReceiptDto): Promise<void> {
    const fileName = `files/${receiptDto.RCT.TIN}_${receiptDto.RCT.GC}_${dayjs().format('YYMMDDhhmmssSSS')}.txt`
    await fs.writeFileSync(fileName, JSON.stringify(receiptDto, null, 2))
  }
}
