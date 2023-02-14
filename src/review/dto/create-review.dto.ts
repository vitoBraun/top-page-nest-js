import { IsNumber, IsString, Max, Min } from 'class-validator';

const REVIE_RATING_ERROR = 'Рейтинг не может быть меньше 1 или больше 5';
export class CreateReviewDto {
  @IsString()
  name: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @Max(5, { message: REVIE_RATING_ERROR })
  @Min(1, { message: REVIE_RATING_ERROR })
  @IsNumber()
  rating: number;

  @IsString()
  productId: string;
}
