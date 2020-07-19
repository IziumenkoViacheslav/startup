import { InputType, Field, registerEnumType } from '@nestjs/graphql';
import { IsOptional, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';


/**
 * Get payments request dto.
 */
@InputType({ description: 'Get payments request dto.' })
export class GetPaymentsRequestDto {
  /**
   * From timestamp.
   */
  @Field(() => Number, {
    nullable: true,
    description: 'From timestamp',
  })
  @IsOptional()
  @IsNumber()
  public readonly from?: number;

  /**
   * Till timestamp.
   */
  @Field(() => Number, {
    nullable: true,
    description: 'Till timestamp',
  })
  @IsOptional()
  @IsNumber()
  public readonly till?: number;

  /**
   *  Skip Records.
   */
  @Field(() => Number, {
    nullable: true,
    description: 'Skip Records',
  })
  @IsOptional()
  @IsNumber()
  public readonly skip?: number;

  /**
   *  Limit Records.
   */
  @Field(() => Number, {
    nullable: true,
    description: 'Limit Records',
  })
  @IsOptional()
  @IsNumber()
  public readonly limit?: number;

  
}
