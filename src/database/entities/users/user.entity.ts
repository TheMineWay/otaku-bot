import {
  AllowNull,
  Column,
  DataType,
  Default,
  PrimaryKey,
  Table,
  Model,
} from 'sequelize-typescript';
import { OmitIdAndTimestamps } from '../../../types/database/omit-id-and-timestamps.type';
import { ITimestamps } from '../../../types/database/timestamps.interface';
import { uuid } from '../../../types/generic/uuid';
import { OmitTimestamps } from '../../../types/database/omit-timestamps.type';

export interface UserAttributes extends ITimestamps {
  id: uuid;

  discordId: string;
  acceptedEulaAt: Date;
}
export interface UserCreateAttributes
  extends OmitIdAndTimestamps<UserAttributes> {}
export interface UserUpdateAttributes extends Partial<UserCreateAttributes> {}

@Table({
  paranoid: true,
  indexes: [
    {
      fields: ['discordId'] as (keyof UserCreateAttributes)[],
    },
    {
      fields: ['acceptedEulaAt'] as (keyof UserCreateAttributes)[],
    },
  ],
})
export class User
  extends Model<UserAttributes, UserCreateAttributes>
  implements OmitTimestamps<UserAttributes>
{
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: uuid;

  @AllowNull(false)
  @Column(DataType.STRING(128))
  discordId: string;

  @AllowNull(true)
  @Column(DataType.DATE)
  acceptedEulaAt: Date | null;
}
