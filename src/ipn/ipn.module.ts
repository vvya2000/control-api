import { Module } from '@nestjs/common';
import { ToCheckoutModule } from 'src/to-checkout/to-checkout.module';
import { IpnController } from './ipn.controller';

@Module({
  imports: [ToCheckoutModule],
  controllers: [IpnController],
})
export class IpnModule {}
