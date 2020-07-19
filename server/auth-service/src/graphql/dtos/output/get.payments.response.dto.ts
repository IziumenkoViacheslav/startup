import { ObjectType, Field } from '@nestjs/graphql';
import { plainToClass, Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
// import { Payment } from '@/app/services/common/database/models/payment.entity';

/**
 * Get payments response dto.
 */
@ObjectType({ description: 'Get payments response dto.' })
export class GetPaymentsResponseDto {
  /**
   * Constructor
   *
   * @param data response data
   */
  constructor(data?: Partial<GetPaymentsResponseDto>) {
    if (data) {
      Object.assign(this, plainToClass(GetPaymentsResponseDto, data));
    }
  }

  /**
   * Payments.
   */
  // @Field(() => [Payment], {
  //   description: 'Payments.',
  // })
  // @IsArray()
  // @ValidateNested({ each: true })
  // @Type(() => Payment)
  // public readonly payments: Payment[];
}
