import { Body, Controller, HttpException, Post } from '@nestjs/common'
import { ErrorDto } from 'src/Repository/Dto'
import { ReceiptsService } from 'src/Services/receipts.service'
import { XMLParser, XMLValidator } from 'fast-xml-parser'
import * as fs from 'fs'

@Controller('efdmsRctApi/api/efdmsRctInfo')
export class ReceiptsController {
  constructor(private readonly receiptsService: ReceiptsService) {}

  @Post()
  async createReview(
    @Body() receiptXml: string,
  ): Promise<Response> {
    const config = this.checkFileConfig()
    if (config.errorCode !== 200){
      throw new HttpException(config.errorMessage, config.errorCode)
    }

    if(!XMLValidator.validate(receiptXml)){
      return 
    }

    const parser = new XMLParser();
    const receiptDto = parser.parse(receiptXml)
    await this.receiptsService.save(receiptDto)
  }

  checkFileConfig() : ErrorDto {
    const errorConfig = fs.readFileSync('files/config.json', 'utf8')
    return JSON.parse(errorConfig)
  }
}
