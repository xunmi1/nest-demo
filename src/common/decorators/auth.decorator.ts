import { SetMetadata, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ROLES_KEY, RolesGuard } from '../guards';

export const Auth = () => UseGuards(AuthGuard(), RolesGuard);
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
