import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsEnum, IsNumber, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';
import { Field, InputType, ObjectType, registerEnumType } from '@nestjs/graphql';



/**
 * Payment list
 */
@InputType({ description: 'Payments Options DTO.' })
export class PaymentEntityOptionsDto {
  /**
   * Id of payment
   */
  @IsOptional()
  @Field(() => String, {
    nullable: true,
    description: 'Payment id. \n\n example: b298a478-1441-485d-bc41-b45a83cdb738',
  })
  public paymentId: string;

  /**
   * Payment amount
   */
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
    description: 'amount. \n\n example: 40',
  })
  public amount: number;

  /**
   * Currency of payment
   */
  @IsString()
  @IsOptional()
  @MaxLength(3)
  @Field(() => String, {
    nullable: true,
    description: 'currency. \n\n example: UAH',
  })
  public currency: string;

  /**
   * Order Id
   */
  @IsUUID()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
    description: 'Order id. \n\n example: b298a478-1441-485d-bc41-b45a83cdb738',
  })
  public orderId: string;

  /**
   * User Id
   */
  @IsUUID()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
    description: 'User id. \n\n example: b298a478-1441-485d-bc41-b45a83cdb738',
  })
  public userId: string;

  /**
   * First name
   */
  @IsString()
  @MaxLength(100)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
    description: 'First name . \n\n example: Jeff',
  })
  public firstName?: string;

  /**
   * Last name
   */
  @IsString()
  @MaxLength(100)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
    description: 'Last name . \n\n example: Brooks',
  })
  public lastName?: string;

  /**
   * Client phone number
   */
  @IsString()
  @MaxLength(100)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
    description: 'Phone . \n\n example: +3125412515',
  })
  public phone?: string;

  /**
   * Payment provider id
   */
  @IsUUID()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
    description: 'Payment provider id. \n\n example: b298a478-1441-485d-bc41-b45a83cdb738',
  })
  public paymentProviderId: string;
}
