import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateInspectionBugs1591715392730
  implements MigrationInterface {
  name = 'CreateInspectionBugs1591715392730';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'inspection_bugs',
        columns: [
          {
            name: 'inspection_id',
            type: 'uuid',
            isNullable: true,
            isPrimary: true,
          },
          {
            name: 'bug_id',
            type: 'uuid',
            isNullable: true,
            isPrimary: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'inspection_bugs',
      new TableForeignKey({
        name: 'inspection_bugs_bug',
        columnNames: ['bug_id'],
        referencedTableName: 'bugs',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'inspection_bugs',
      new TableForeignKey({
        name: 'inspection_bugs_inspection',
        columnNames: ['inspection_id'],
        referencedTableName: 'inspections',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'inspection_bugs',
      'inspection_bugs_inspection',
    );

    await queryRunner.dropForeignKey('inspection_bugs', 'inspection_bugs_bug');

    await queryRunner.dropTable('inspection_bugs');
  }
}
