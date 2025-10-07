import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Member from './member.model';
import Book from './book.model';
import Staff from './staff.model';

@Table({
  tableName: 'borrow',
  timestamps: true,
  indexes: [
    { name: 'idx_member_id', fields: ['memberId'] },
    { name: 'idx_book_id', fields: ['bookId'] },
  ],
})
export class Borrow extends Model {
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
  })
  id!: string;

  @ForeignKey(() => Member)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  memberId!: string;

  @BelongsTo(() => Member)
  member!: Member;

  @ForeignKey(() => Book)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  bookId!: string;

  @BelongsTo(() => Book)
  book!: Book;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  borrowDate!: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  dueDate!: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  returnDate!: Date;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.00,
  })
  fine!: number;

  @Column({
    type: DataType.ENUM('borrowed', 'returned', 'overdue'),
    allowNull: false,
    defaultValue: 'borrowed',
  })
  status!: 'borrowed' | 'returned' | 'overdue';

  @ForeignKey(() => Staff)
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  staffId!: string;

  @BelongsTo(() => Staff)
  staff!: Staff;
}

export default Borrow;