import { Args, Query, Resolver } from '@nestjs/graphql';
// import { ResponseValidationInterceptor } from '@/app/validation/response-validation.interceptor';
import { UseInterceptors } from '@nestjs/common';
import { GetPaymentsResponseDto, GetPaymentsRequestDto } from '../dtos';

/**
 * Get existing payments.
 */
@Resolver('GetPayments')
// @UseInterceptors(ResponseValidationInterceptor)
export class GetPaymentsResolver {
  constructor() {}

  /**
   * Get existing payments.
   */
  @Query(() => GetPaymentsResponseDto, { description: 'Get existing pay systems.' })
  public async getPayments(
    @Args({
      name: 'clientOptions',
      type: () => GetPaymentsRequestDto,
      description: 'Get existing payments.',
    })
    clientOptions: GetPaymentsRequestDto,
  ): Promise<GetPaymentsResponseDto> {
    return new GetPaymentsResponseDto();
  }
}
