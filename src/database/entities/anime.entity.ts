import {
  AllowNull,
  Column,
  DataType,
  Default,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { OmitIdAndTimestamps } from '../../types/database/omit-id-and-timestamps.type';
import { OmitTimestamps } from '../../types/database/omit-timestamps.type';
import { ITimestamps } from '../../types/database/timestamps.interface';
import { uuid } from '../../types/generic/uuid';

export interface AnimeAttributes extends ITimestamps {
  id: uuid;

  animeId: string;
  name: string;
  coverUrl: string;
  trailerUrl: string | null;
  score: number;
  ranked: number | null;
  indexedAt: Date;
}
export interface AnimeCreateAttributes
  extends OmitIdAndTimestamps<AnimeAttributes> {}
export interface AnimeUpdateAttributes extends Partial<AnimeCreateAttributes> {}

@Table({
  paranoid: true,
  indexes: [
    {
      fields: ['animeId'] as (keyof AnimeCreateAttributes)[],
    },
  ],
})
export class Anime
  extends Model<AnimeAttributes, AnimeCreateAttributes>
  implements OmitTimestamps<AnimeAttributes>
{
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: uuid;

  @AllowNull(false)
  @Column(DataType.STRING(16))
  animeId: string;

  @AllowNull(false)
  @Column(DataType.STRING(64))
  name: string;

  @AllowNull(false)
  @Column(DataType.STRING(512))
  coverUrl: string;

  @AllowNull(true)
  @Column(DataType.STRING(512))
  trailerUrl: string | null;

  @AllowNull(false)
  @Column(DataType.DECIMAL({ precision: 4, scale: 2 }))
  score: number;

  @AllowNull(true)
  @Column(DataType.INTEGER)
  ranked: number | null;

  @AllowNull(false)
  @Column(DataType.DATE)
  indexedAt: Date;
}
