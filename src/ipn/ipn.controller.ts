import { Controller } from '@nestjs/common';
import { ToCheckoutService } from 'src/to-checkout/to-checkout.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class IpnController {
  constructor(private readonly toCheckoutService: ToCheckoutService) {}

  @MessagePattern({ cmd: 'process_payment' })
  async handlePayment(ipnData: any) {
    console.log('ipnData from main', ipnData);

    return this.toCheckoutService.processPayment(ipnData);
  }
}
