# Generated by Django 4.0.6 on 2022-07-20 01:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='room',
            old_name='create',
            new_name='created_at',
        ),
    ]
